import { useState } from 'react';
import './Category.css';


function SearchMoviePage(){
    const [category,setCategory] = useState([
        {   id:'1',
            title:'현재 상영중인'
        },
        {   id:'2',
            title:'인기있는' 
        },
        {   id:'3',
            title:'높은 평가를 받은'
        },
        {   id:'4',
            title:'개봉 예정중인'
        }
    ]);
    
    return(
        <div>
            <div className='cate-container'>
                <p style={{color:'white',fontSize:'25px',fontWeight:'bold'}}>카테고리</p>
            </div>
            <div className='album'>
                {
                    category.map((category,index)=>{
                        return(
                            <div key={category.id}>
                                <img className='images' src ={`photo${index+1}.png`}></img>
                                <p className='categoty-name'>{category.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        
        
    )
}
export default SearchMoviePage;