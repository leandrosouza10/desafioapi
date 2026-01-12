describe('API Trello - Validar campo name da lista', () => {

  it('Deve retornar status 200 e exibir o nome da lista', () => {

    cy.request({
      method: 'GET',
      url: 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a'
    }).then((response) => {
  
      expect(response.status).to.eq(200)  

      //   Valida existência da estrutura
      expect(response.body).to.have.property('data')
      expect(response.body.data).to.have.property('list')
      expect(response.body.data.list).to.have.property('name')
      
      //   Valida que o campo não está vazio
      expect(response.body.data.list.name).to.not.be.empty


       //  Validar valor exato do campo
      expect(response.body.data.list.name).to.eq('Professional')
      

     cy.log(`Nome da lista validado com sucesso: ${response.body.data.list.name}`)
      

     
    })
  })

})