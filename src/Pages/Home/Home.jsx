import React, {useCallback, useEffect} from "react";
import style from './Home.module.scss';
import { Categories, Sort, Pizza, PizzaLoader } from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../../redux/actions/filters";
import { fetchPizzas } from '../../redux/actions/pizzas';
import { addPizzaToCart } from "../../redux/actions/cart";

const catList = ['Meat', 'Vegetarian', 'Grill', 'Sharp', 'Closed'];
const sortList = [
    {name: 'Popular', type: 'rating', order: 'desc'},
    {name: 'Price', type: 'price', order: 'desc'},
    {name: 'Alphabet', type: 'name', order: 'asc'}
];

const Home = () => {
    const dispatch = useDispatch();
    const isLoaded  = useSelector(({ pizzas }) => pizzas.isLoaded);
    const items  = useSelector(({ pizzas }) => pizzas.items);
    const cartItems = useSelector(({ cart }) => cart.items);
    const { category, sortBy }  = useSelector(({filters}) => filters);
   
    useEffect(() => { 
        dispatch(fetchPizzas(category, sortBy));
    }, [dispatch, category, sortBy]);

    const onSelectCat = useCallback((index) => {
        dispatch(setCategory(index))
    }, [dispatch]);

    const onClickSortBy = useCallback((type) => {
        dispatch(setSortBy(type))
    }, [dispatch]);

    const addToCart = (obj) => {
        dispatch(addPizzaToCart(obj));
    }

    return (
        <div className={style.homeContent}>
            <div className={`${ style.content__top } d-flex justify-content-between flex-wrap`}>
                <div className='col-lg-8 col-sm-12 col-xs-12'>
                    <Categories
                        activeCategory={category}
                        onClickCategory={ onSelectCat }
                        catList={ catList }
                    />
                </div>
                <div className="col-lg-3 col-sm-12 d-flex align-items-center justify-content-center">
                    <Sort onClickSortBy={ onClickSortBy } sortBy={ sortBy.type } sortList={ sortList } />
                </div>
            </div>
            <div className={`${style.mainContent} pt-1 pb-3 px-4`}>
                <h2 className=''>All Pizza</h2>
                <div className={`${style.pizzaWrapper} py-4`}>
                    {
                        isLoaded 
                        ? items.map((item) => {
                            return(
                                <Pizza
                                    addToCart={ addToCart }
                                    key={item.id}
                                    inCartCount={ cartItems[item.id] && cartItems[item.id].items.length }
                                    { ...item }
                                />
                            )
                        }) 
                        : Array(10)
                            .fill(0)
                            .map((_, index) => <PizzaLoader key={index} />)
                    }
                </div>
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