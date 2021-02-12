import React from 'react';
import {createMuiTheme, createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

/*const theme = createMuiTheme({
    overrides: {
        // Style sheet name ⚛️
        MuiButton: {
            // Name of the rule
            text: {
                // Some CSS
                color: 'white',
            },
        },
    },
});*/

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

export default function SimpleSelect() {
    const classes = useStyles();
    const [category, setCategory] = React.useState('Choose a category');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setCategory(event.target.value as string);
    };

    return (
        <div>
            <FormControl className={classes.formControl} color={"primary"}>
                <InputLabel id="categories-select-label" style={{color: '#fff'}}>Categories</InputLabel>
                <Select
                    labelId="categories-select-label"
                    id="categories-select"
                    value={category}
                    onChange={handleChange}
                    style={{color: '#fff'}}
                >
                    <MenuItem value={'action'}>Action</MenuItem>
                    <MenuItem value={'comedy'}>Comedy</MenuItem>
                    <MenuItem value={'horror'}>Horror</MenuItem>
                    <MenuItem value={'drama'}>Drama</MenuItem>
                    <MenuItem value={'documentary'}>Documentary</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}