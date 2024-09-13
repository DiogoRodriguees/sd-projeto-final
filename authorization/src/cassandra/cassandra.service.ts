import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Client } from 'cassandra-driver';

@Injectable()
export class CassandraService implements OnModuleInit, OnModuleDestroy {
  private client: Client;

  // Método para acessar a instância do cliente Cassandra
  getClient(): Client {
    return this.client;
  }

  async onModuleInit() {
    this.client = new Client({
      contactPoints: ['127.0.0.1'],   // Nós iniciais de contato no cluster (endereço do Cassandra)
      localDataCenter: 'datacenter1', // Indica o data center prioritário para a conexão
      socketOptions: { readTimeout: 30000 },
    });

    try {
      await this.client.connect();
      console.log('[Cassandra Service] Conectado ao Cassandra com sucesso!');

      // Verifica se o keyspace existe, caso contrário, cria-o
      const query = `
      CREATE KEYSPACE IF NOT EXISTS my_keyspace
      WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 1}
    `;
      await this.client.execute(query);
      console.log('[Cassandra Service] Keyspace criado/verificado com sucesso!');

      // Conectando-se ao keyspace
      this.client = new Client({
        contactPoints: ['127.0.0.1'],
        localDataCenter: 'datacenter1',
        keyspace: 'my_keyspace',  // Especifica o banco de dados lógico dentro do cluster onde as operações serão realizadas
      });

      // Conectando-se ao Cassandra com a keyspace configurada
      await this.client.connect();

      console.log('[Cassandra Service] Tabelas criadas com sucesso!');

    } catch (err) {
      console.error('[Cassandra Service] Erro ao conectar ao Cassandra:', err);
    }
  }

  async onModuleDestroy() {
    await this.client.shutdown();
    console.log('[Cassandra Service] Conexão com Cassandra encerrada.');
  }

  // Método para obter um usuário
  async findOne(email: string): Promise<any | null> {
    const query = `SELECT * FROM users WHERE email = ? ALLOW FILTERING`;
    try {
      const result = await this.client.execute(query, [email], { prepare: true });

      // Verifica se há linhas retornadas, se sim retorna a primeira
      if (result.rowLength > 0) {
        return result.rows[0];
      } else {
        // Caso nenhum usuário for encontrado
        return null;
      }
    } catch (error) {
      console.error('[Cassandra Service] Erro ao buscar usuário:', error);
      return null;
    }
  }
}
