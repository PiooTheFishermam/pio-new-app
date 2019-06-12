import React from 'react';
import Article from '../components/Article'


const articles = [
    {
        id: 1,
        title: "Czym jest teoria strun",
        author: "Jan Nowak",
        text: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odio beatae vitae, exercitationem, asperiores tenetur necessitatibus modi voluptas adipisci, porro eos optio quam fugiat magni id dicta dolores debitis facere? lorem       lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam aliquid excepturi placeat eaque atque ducimus, asperiores id repudiandae facilis rerum, molestias quod vel tempora nesciunt ex doloribus dignissimos hic?"
    },
    {
        id: 2,
        title: "Czym jest coś takiego z czymś takim i bez czegoś takiego",
        author: "Jan Nowakowski",
        text: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odio beatae vitae, exercitationem, asperiores tenetur necessitatibus modi voluptas adipisci, porro eos optio quam fugiat magni id dicta dolores debitis facere? lorem       lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam aliquid excepturi placeat eaque atque ducimus, asperiores id repudiandae facilis rerum, molestias quod vel tempora nesciunt ex doloribus dignissimos hic?"
    },
    {
        id: 3,
        title: "Czym jest un",
        author: "Jan Jankowski",
        text: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odio beatae vitae, exercitationem, asperiores tenetur necessitatibus modi voluptas adipisci, porro eos optio quam fugiat magni id dicta dolores debitis facere? lorem       lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam aliquid excepturi placeat eaque atque ducimus, asperiores id repudiandae facilis rerum, molestias quod vel tempora nesciunt ex doloribus dignissimos hic?"
    },
]


const HomePage = () => {
    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
        // {...article} - tego typu zapis pozwala przekazać całą tablicę w propsach, jest to krótszy zapis, normalnie pisalibyśmy title={article.title} itd itd
    ))

    return (
        <div className="home">
            {artList}
        </div>
    );
}

export default HomePage;