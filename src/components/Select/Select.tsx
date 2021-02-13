import React, {SyntheticEvent, useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {useDispatch, useSelector} from "react-redux";
import {
    CategoriesMoviesType,
    setCategory
} from "../../features/MoviesByCategory/categoryMoviesReducer/categoryMovies-reducer";
import {AppRootStateType} from "../../utils/types";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 110,
            borderBottom: '1px solid #fff',
            '& svg': {
                color: '#fff'
            }
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

export function SelectComponent(props: SelectPropsType) {
    const {values, currentValue, onSelectHandler} = props
    const classes = useStyles();
    const dispatch = useDispatch()
    const currentCategory = useSelector<AppRootStateType, CategoriesMoviesType>(state => state.categoryMovies.category)

    const [firstValue, setFirstValue] = useState('')

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        //onSelectHandler(event.target.value as string);
        dispatch(setCategory(event.target.value as CategoriesMoviesType))
        console.log('STATE VALUE: ' + currentCategory)

        console.log('TARGET: ' + event.target.value)
    };

    return (
        <div>
            <FormControl className={classes.formControl} color={"primary"}>
                <InputLabel id="categories-select-label" style={{color: '#fff'}}>Categories</InputLabel>
                <Select
                    labelId="categories-select-label"
                    id="categories-select"
                    value={currentCategory ? currentCategory : firstValue }
                    onChange={handleChange}
                    style={{color: '#fff'}}
                >
                    {values.map(val => <MenuItem key={val} value={val}>{val}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    );
}

type SelectPropsType = {
    currentValue: number | string
    values: Array<string | number>
    onSelectHandler: (value: any) => void
}