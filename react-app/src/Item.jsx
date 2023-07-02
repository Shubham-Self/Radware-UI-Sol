import * as React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ItemContext } from './ItemContext';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import NotFound from './NotFound';

export default function Item() {
    const { id } = useParams();
    const { itemData } = useContext(ItemContext);
    let data = [];
    data = itemData && itemData.filter(d => d.id == id);
    if (!data || !data.length) {
        return (
            <NotFound />
        );
    }
    return (
        <Card variant="inlined">
            <React.Fragment>
                <CardContent>
                    <Typography variant="h6" component="div">
                        Name: {data[0].name}
                    </Typography>
                    <Typography variant="body2">
                        Contact: {data[0].phone}
                        <br />
                        Email: {data[0].email}
                        <br />
                        Website: {data[0].website}
                        <br />
                        City: {data[0].address.city}
                        <br />
                        Company: {data[0].company.name}
                    </Typography>
                </CardContent>
            </React.Fragment>
        </Card>
    );
}

