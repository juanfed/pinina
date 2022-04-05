import React from 'react';
import Link from 'next/link';

// Material UI Components
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

// Icons
import ClearAllIcon from '@material-ui/icons/ClearAll';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';

export function ListItems() {

  return (
    <nav>
      <div className="accordion mx-1" id="accordionExample">
    
      
        
        
        
        <div className="card shadow my-0" style={{ borderRadius: 20 }}>
          <div className="card-header text-center" id="headingOne">
            <h2 className="mb-0">
              <ListItem disableGutters button data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" className="min-width">
                <ListItemIcon>
                  <ClearAllIcon className="text-info" />
                </ListItemIcon>
                <button className="btn btn-link btn-block text-center text-info" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  T_vacunas
                </button>
              </ListItem>
            </h2>
          </div>
          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="card-body">
              
              <Link href="/main/C_vacTVacueCreate" activeStyle={{ color: '#e1e1e1!important', backgroundColor: '#000!important' }}>
                  <ListItem button disableGutters>
                    <ListItemIcon>
                      <ListIcon />
                    </ListItemIcon>
                    <ListItemText primary='Todos los tvacunas' className="text-dark"/>
                  </ListItem>
              </Link>

            </div>
          </div>
        </div>
        
        
        <div className="card shadow my-0" style={{ borderRadius: 20 }}>
          <div className="card-header text-center" id="headingOne">
            <h2 className="mb-0">
              <ListItem disableGutters button data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" className="min-width">
                <ListItemIcon>
                  <ClearAllIcon className="text-info" />
                </ListItemIcon>
                <button className="btn btn-link btn-block text-center text-info" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  T_inventarios
                </button>
              </ListItem>
            </h2>
          </div>
          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="card-body">
              
              <Link href="/main/C_invTInveiCreate" activeStyle={{ color: '#e1e1e1!important', backgroundColor: '#000!important' }}>
                  <ListItem button disableGutters>
                    <ListItemIcon>
                      <ListIcon />
                    </ListItemIcon>
                    <ListItemText primary='Todos los tinventarios' className="text-dark"/>
                  </ListItem>
              </Link>

            </div>
          </div>
        </div>
        
        {/* replace */}
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
      </div>
    </nav>
  )
}
