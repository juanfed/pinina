import React from 'react';
import Link from 'next/link';

// Material UI Components
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

// Icons
import ClearAllIcon from '@material-ui/icons/ClearAll';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';

import Button from '@material-ui/core/Button';

export function ListItems() {

    return (
        <nav>
            <div className="accordion mx-1" id="accordionExample">
                <Button fullWidth className="my-4 btn-citas" color="info" type="button">
                    Citas
                </Button>
            </div>
        </nav>
    )
}