import Card from "../Card/Card";


const CardList = (props) => {
   return <div>{
      props.profiles.map ((value, index) => <Card {...value} key={index}/>)
   }
   </div>
}

export default CardList;
