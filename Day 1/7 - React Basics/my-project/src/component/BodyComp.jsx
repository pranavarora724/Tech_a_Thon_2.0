function BodyComp()
{

    const products = [
        { title: 'Cabbage', id: 1 },
        { title: 'Garlic', id: 2 },
        { title: 'Apple', id: 3 },
      ];


    return(
        <div>
            {
                products.map((row , index)=>{
                    return(
                    <div>{row?.title}</div>
                )
                })
            }
        </div>
    )
}

export default BodyComp;