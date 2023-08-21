interface list{
    name : string
}
const ListGroup = ({name} : list)=>{
    const list = ['Vikram','Kaithi','Peta','Panjaa'];
    return(
        <>
        <h1>{name}</h1>
        <ul>
            {list.map((item)=> <li key={item}>{item}</li>)}
        </ul>
        </>
    )
}

export default ListGroup;