import { useState } from 'react';
import './Category.css';
import { useNavigate } from 'react-router-dom';


function CategoryPage(){
    const [category,setCategory] = useState([
        {   id:'1',
            title:'현재 상영중인',
            path:'now_playing'
        },
        {   id:'2',
            title:'인기있는',
            path:'popular'
        },
        {   id:'3',
            title:'높은 평가를 받은',
            path:'top_rated'
        },
        {   id:'4',
            title:'개봉 예정중인',
            path:'upcoming'
        }
    ]);
    const navigate = useNavigate();


    return(
        <div>
            <div className='cate-container'>
                <p style={{color:'white',fontSize:'25px',fontWeight:'bold'}}>카테고리</p>
            </div>
            <div className='album'>
                {
                    category.map((category,index)=>{
                        return(
                            <div key={category.id} className="category-item" onClick = {()=>{
                                navigate(
                                    `/movie/${category.path}`               
                                )
                            }}>
                                <img className='images' src ={`photo${index+1}.png`}></img>
                                <p className='category-name'>{category.title}</p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
        
        
    )
}
export default CategoryPage;