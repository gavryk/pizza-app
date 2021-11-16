import React, {useCallback} from "react";
import style from './Home.module.scss';
import { Categories, Sort, Pizza } from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../../redux/actions/filters";

const catList = ['Meat', 'Vegetarian', 'Grill', 'Sharp', 'Closed'];
const sortList = [
    {name: 'Popular', type: 'popular'},
    {name: 'Price', type: 'price'},
    {name: 'Alphabet', type: 'alphabet'}
];

const Home = () => {
    const dispatch = useDispatch();
    const items  = useSelector(({pizzas}) => pizzas.items);

    const onSelectCat = useCallback((index) => {
        dispatch(setCategory(index))
    }, []);

    return (
        <div className={style.homeContent}>
            <div className={`${ style.content__top } d-flex justify-content-between`}>
                <div className='col-8'>
                    <Categories
                        onClickItem={ onSelectCat }
                        catList={ catList }
                    />
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center">
                    <Sort sortList={ sortList } />
                </div>
            </div>
            <div className={`${style.mainContent} pt-1 pb-3 px-4`}>
                <h2 className=''>All Pizza</h2>
                {   items &&
                    <div className={`${style.pizzaWrapper} py-4`}>
                        {
                            items.map((item, index) => {
                                return(
                                    <Pizza
                                        key={item.id}
                                        { ...item }
                                    />
                                )
                            })
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default Home;


//NOT ACTUAL, now i use redux hooks

// class Home extends React.Component {
//     componentDidMount() {
//         axios.get('http://localhost:3000/db.json')
//         .then(({ data }) => {
//             this.props.setPizzas(data.pizzas);
//         });
//     }

//     render() {
//         return (
//             <div className={style.homeContent}>
//                 <div className={`${ style.content__top } d-flex justify-content-between`}>
//                     <div className='col-8'>
//                         <Categories items={ categories }/>
//                     </div>
//                     <div className="col-3 d-flex align-items-center justify-content-center">
//                         <Sort sortList={ sortList } />
//                     </div>
//                 </div>
//                 <div className={`${style.mainContent} pt-1 pb-3 px-4`}>
//                     <h2 className=''>All Pizza</h2>
//                     {   this.props.items &&
//                         <div className={`${style.pizzaWrapper} py-4`}>
//                             {
//                                 this.props.items.map((item, index) => {
//                                     return(
//                                         <Pizza
//                                             key={item.id}
//                                             { ...item }
//                                         />
//                                     )
//                                 })
//                             }
//                         </div>
//                     }
//                 </div>
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         items: state.pizzas.items,
//         filters: state.filters
//     }
// }

// const mapDispatchToProps = {
//     setPizzas
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setPizzas: (items) => {
//             dispatch(setPizzas(items))
//         }
//     };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home);