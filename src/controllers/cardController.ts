import { Request, Response } from 'express';
import { Cards } from '../models/Cards';
import router from '../routes';


export const excluir = async (req: Request, res: Response ) => {
    let id : string = req.params.id;
    await Cards.destroy({ where: {id} });
    res.redirect('/');
}

export const editar = async (req: Request, res: Response) => {
    try {
      const cardId = req.params.id;
      const cards = await Cards.findByPk(cardId);
  
      if (!cards) {
        return res.status(404).send('Usuário não encontrado');
      }
  
      // Renderiza o arquivo HTML do formulário de edição e passa os dados do usuário
      res.send(`
      <h2>Cadastrar novo usuário no banco</h2>
      <fieldset>
          <legend>Editando Carta</legend>
          <form method="POST" action="/salvar">
              <input type="hidden" name="id" value="${cards.id}">
              <label for="name">Nome:</label>
              <input type="text" name="name" value="${cards.name}" /><br/><br/>
              <label for="cmc">Custo de Mana:</label>
              <input type="text" name="cmc" value="${cards.cmc}" /><br/><br/>
              <label for="type">Tipo de Carta:</label>
              <input type="text" name="type" value="${cards.type}" /><br/><br/>
              <label for="collection">Coleção:</label>
              <input type="text" name="collection" value="${cards.collection}"/><br/><br/>
              <label for="priceaverage">Preço Médio:</label>
              <input type="text" name="priceaverage" value="${cards.priceaverage}"/><br/><br/>
              <input type="submit" value="Salvar Carta" href=""/>
              <a href='/'>
                  <button type="button" class="btn btn-primary">Voltar</button>
              </a>
          </form>
      </fieldset>
      `);
    } catch (error) {
      console.error('Erro ao obter carta:', error);
      res.status(500).send('Erro ao obter carta');
    }
  };


export const salvar = async (req: Request, res: Response) => {
    try {
        const id = req.body.id;
        const newName = req.body.name;
        const newCmc = req.body.cmc;
        const newType = req.body.type;
        const newCollection = req.body.collection;
        const newPriceaverage = req.body.priceaverage;
        const card = await Cards.findByPk(id);
  
      if (!card) {
        return res.status(404).send('Carta não encontrada');
      }
  
      // Atualiza os dados da carta com as novas informações
      card.name = newName;
      card.cmc = newCmc;
      card.type = newType;
      card.collection = newCollection;
      card.priceaverage = newPriceaverage;
  
      // Salva as alterações no banco de dados
      await card.save();
  
      res.redirect('/');
    } catch (error) {
      console.error('Erro ao salvar as alterações:', error);
      res.status(500).send('Erro ao salvar as alterações');
    }
};


export const novocard = async (req: Request, res: Response) => {
    const { name, cmc, type, collection, priceaverage } = req.body; // obtenhem os valores do formulário
    try {
      // cria um novo card com os valores fornecidos
      const newCard = await Cards.create({ name, cmc, type, collection, priceaverage});
      res.status(201).redirect('/'); // retorne o novo card como resposta
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao inserir usuário');
    }
  };
  