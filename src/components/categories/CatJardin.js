import React from "react"
import {connect} from "react-redux"
import ItemCard from "../ItemCard";



function CatJardin(props){

       const it=props.item.map(el=><ItemCard tit={el.title} img={el.img} price={el.price}/>)

        return(
            <>
            {it}
            </>
        )

}

const mapStateToProps = (state)=>({
    item: state.jardin
})

export default connect(mapStateToProps)(CatJardin)




