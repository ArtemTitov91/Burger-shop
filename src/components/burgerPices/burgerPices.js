import React, { useCallback, useEffect } from "react";
import {
    ConstructorElement,
    DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import burgerConstructor from "../burgerConstructors/burgerConstructor.module.css";
import { useDrag, useDrop } from "react-dnd";
import { useSelector, useDispatch } from 'react-redux';
import { DELETE_INGREDIENTS, SORT_INGREDIENTS } from '../../service/action/cart';
import PropTypes from 'prop-types';

const BurgerPices = ({ image_mobile, price, id, name }) => {

    const { ingredients, burgerInsides } = useSelector(state => state.reducer);

    const findPice = useCallback((id) => {
        const burgerElement = burgerInsides.filter((el) => el._id === id)[0];
        return {
            burgerElement,
            index: burgerInsides.indexOf(burgerElement),
        };
    }, [burgerInsides]);

    const moveCard = useCallback((id, atIndex) => {
        const { burgerElement, index } = findPice(id);
        const arr = burgerInsides.slice();
        arr.splice(index, 1)
        arr.splice(atIndex, 0, burgerElement)

        dispatch({
            type: SORT_INGREDIENTS,
            burgerInsides: arr
        })
    }, [findPice, burgerInsides]);

    const originalIndex = findPice(id).index;

    const [, transition] = useDrag(() => ({
        type: 'insideItems',
        item: { id, originalIndex },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
        end: (item, monitor) => {
            const { id: droppedId, originalIndex } = item;
            const didDrop = monitor.didDrop();
            if (!didDrop) {
                moveCard(droppedId, originalIndex);
            }
        },
    }), [id, originalIndex, moveCard]);
    const [, drop] = useDrop(() => ({
        accept: 'insideItems',
        hover({ id: draggedId }) {
            if (draggedId !== id) {
                const { index: overIndex } = findPice(id);
                moveCard(draggedId, overIndex);
            }
        },
    }), [findPice, moveCard]);


    const dispatch = useDispatch();

    const deleteButton = (id) => {
        const arr = ingredients;
        let index = '';
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]._id === id) {
                index = i
                break
            }
        }
        const deleteArr = arr.slice(0, index).concat(arr.slice(index + 1))
        dispatch({
            type: DELETE_INGREDIENTS,
            ingredients: deleteArr
        })
    }

    return (
        <div
            className={burgerConstructor.burgerComponent}
            ref={(node) => transition(drop(node))}>
            <DragIcon type="primary" />
            <ConstructorElement
                handleClose={() => deleteButton(id)}
                text={name}
                price={price}
                thumbnail={image_mobile}
            />
        </div>
    )
}

BurgerPices.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image_mobile: PropTypes.string.isRequired,
}

export default BurgerPices