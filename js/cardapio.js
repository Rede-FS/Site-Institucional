// .entrada
// .sobremesa
// .carnes
// .massas
// .sanduiche

let restaurante = new Vue({
    el: '#menu',
    data: {
        cardapio: [
            {
                titulo: 'Churrasco',
                valor: '123,45',
                descricao: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan-tium doloremque laudantium',
                imagem: 'img/project/project-grid-three/project-g-three-1.jpg',
                categoria: 'carnes'
            },
            {   
                titulo: 'Pizza',
                valor: '123,45',
                descricao: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan-tium doloremque laudantium',
                imagem: 'img/project/project-grid-three/project-g-three-2.jpg',
                categoria: 'massas'
            },
            { 
                titulo: 'Bolo',
                valor: '123,45',
                descricao: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan-tium doloremque laudantium',
                imagem: 'img/project/project-grid-three/project-g-three-3.jpg',
                categoria: 'sobremesa'
            },
            {
                titulo: 'Hamburguer',
                valor: '123,45',
                descricao: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan-tium doloremque laudantium',
                imagem: 'img/project/project-grid-three/project-g-three-4.jpg',
                categoria: 'sanduiche'
            },
            {
                titulo: 'Sushi',
                valor: '123,45',
                descricao: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan-tium doloremque laudantium',
                imagem: 'img/project/project-grid-three/project-g-three-5.jpg',
                categoria: 'entrada'
            },
            {
                titulo: 'churrasco',
                valor: '123,45',
                descricao: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan-tium doloremque laudantium',
                imagem: 'img/project/project-grid-three/project-g-three-1.jpg',
                categoria: 'building isolation interior'
            }
        ]
    }
})
