import image from './Home_page_image.jpg'


export default function(){

    return(
        <>
        <h1>Home Page</h1>
        <img src={image} width="40%" height="500px" style={{float:"left"}}></img>
        <p style={{textAlign:"justify", width:"1400px", marginTop:"200px", lineHeight:"40px"}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, distinctio. Reprehenderit, ipsum voluptatum? Nostrum hic nemo nobis ducimus nesciunt. Modi, mollitia rerum! Soluta cum voluptatibus velit. Deleniti minus nemo labore voluptas odit quod ex nulla quibusdam libero officia? Iure, impedit perferendis quaerat quam sint nesciunt provident debitis qui iusto facere excepturi obcaecati voluptate pariatur mollitia dicta amet aspernatur quis aliquid voluptas quasi adipisci fugit! Repudiandae impedit suscipit cupiditate incidunt enim.
        </p>
        </>
    )

}