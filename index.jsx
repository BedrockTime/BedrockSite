import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Items } from "@/components/Items"

const Home = () => {
  // const products = [
  //   {Id: 1, 
  //     name: "Кот 1", 
  //     img: "https://s13.stc.yc.kpcdn.net/share/i/instagram/B44solahwlo/wr-1280.webp",
  //     discription: "Хороший кот на повседневное использование",
  //     price: "Бесценен"},
  //   {id:2,
  //   name: "Кот 2",
  //   img: "https://img.freepik.com/premium-photo/beautiful-cat-with-blue-eyes_291639-143.jpg",
  //   discription: "Прекрасный собеседник, любит поесть",
  //   price: "Бесценен"}]
  // const ProductNames =products.map({prod} => {
  //   <div>
  //       <img scr={prod.img}/>
  //       <h2>prod</h2>
  //   </div>

  // })
  return(
    <div className="wrapper">
      <Header /> 
      <Items name="Кот 1" img="https://s13.stc.yc.kpcdn.net/share/i/instagram/B44solahwlo/wr-1280.webp" description="Хороший кот на повседневное использование" price="Бесценен"></Items>
      <Footer />     
    </div>
  )
}

export default Home