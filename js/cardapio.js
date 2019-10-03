// .entrada
// .sobremesa
// .carnes
// .massas
// .sanduiche

let restaurante = new Vue({
    el: '#menu',
    data: {
        cardapio: [
            // ===== REFEICÕES =====
            {
                titulo: 'Chapa Mista (Carne e Frango)',
                valor: '80,00',
                descricao: 'Arroz, Salada, Farofa e Batata Frita',
                imagem: 'img/project/project-grid-three/refeicoes/chapa-mista.jpeg',
                categoria: 'refeicoes'
            },
            {   
                titulo: 'Peixe na Chapa',
                valor: '90,00',
                descricao: 'Arroz, Vinagrete e Salada',
                imagem: 'img/project/project-grid-three/refeicoes/peixe-chapa.jpg',
                categoria: 'refeicoes'
            },
            { 
                titulo: 'Camarão na Chapa',
                valor: '110,00',
                descricao: 'Arroz, Vinagrete, Farofa e Salada',
                imagem: 'img/project/project-grid-three/refeicoes/chapa-camarao.jpg',
                categoria: 'refeicoes'
            },
            {
                titulo: 'Chapa Mista (Camarão e Peixe)',
                valor: '123,45',
                descricao: 'Arroz, Vinagrete, Farofa e Salada',
                imagem: 'img/project/project-grid-three/refeicoes/peixe-camarao-chapa.jpg',
                categoria: 'refeicoes'
            },
            {
                titulo: 'Frango na Chapa',
                valor: '80,00',
                descricao: 'Arroz, Salada e Farofa',
                imagem: 'img/project/project-grid-three/refeicoes/frango-chapa.jpg',
                categoria: 'refeicoes'
            },
            {
                titulo: 'Filé na Chapa',
                valor: '80,00',
                descricao: 'Arroz, Salada e Farofa',
                imagem: 'img/project/project-grid-three/refeicoes/file-chapa.jpeg',
                categoria: 'refeicoes'
            },
            // ===== TIRA GOSTO =====
            {
                titulo: 'Costelinha de Porco',
                valor: '40,00',
                descricao: '',
                imagem: 'img/project/project-grid-three/tira-gosto/costelinha-porco.jpg',
                categoria: 'tira-gosto'
            },
            {
                titulo: 'Batata Frita',
                valor: '20,00',
                descricao: '',
                imagem: 'img/project/project-grid-three/tira-gosto/batata-frita.jpeg',
                categoria: 'tira-gosto'
            },
            {
                titulo: 'Batata Chips',
                valor: '15,00',
                descricao: '',
                imagem: 'img/project/project-grid-three/tira-gosto/batata-chips.jpg',
                categoria: 'tira-gosto'
            },
            {
                titulo: 'Frango a Passarinho',
                valor: '35,00',
                descricao: '',
                imagem: 'img/project/project-grid-three/tira-gosto/frango-passarinho.jpg',
                categoria: 'tira-gosto'
            },
            {
                titulo: 'Filé a Palito',
                valor: '40,00',
                descricao: '',
                imagem: 'img/project/project-grid-three/tira-gosto/file-palito.jpeg',
                categoria: 'tira-gosto'
            },
            {
                titulo: 'Tábua de Frios',
                valor: '35,00',
                descricao: '',
                imagem: 'img/project/project-grid-three/tira-gosto/tabua-frios.jpeg',
                categoria: 'tira-gosto'
            },
            {
                titulo: 'Calabresa Acebolada',
                valor: '30,00',
                descricao: '',
                imagem: 'img/project/project-grid-three/tira-gosto/calabresa-acebolada.jpg',
                categoria: 'tira-gosto'
            },
            {
                titulo: 'Camarão',
                valor: '55,00',
                descricao: '',
                imagem: 'img/project/project-grid-three/tira-gosto/camarao.jpeg',
                categoria: 'tira-gosto'
            },
            {
                titulo: 'Isca de Peixe',
                valor: '45,00',
                descricao: '',
                imagem: 'img/project/project-grid-three/tira-gosto/peixe.jpg',
                categoria: 'tira-gosto'
            },
        ]
    }
})
