import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';


/* To Dos:
1. fix pages component and make it reusable: the problem will be the state of the component
2. Option of full table in a modal elemet where the user could see all details of their entries
3. Repeat that for Output and not only food */

class Pages extends React.Component {
    state= { 
        currentPage: 1,
    }
  
    
     /* Calculting the number of pages that I need in my pagination */
     getNumberOfPages = (array) => { 
        const numberPerPage = 2;
        if (array.length < numberPerPage ) {
            const numberOfPages = 1
            return numberOfPages
        } else { 
            const numberOfPages = Math.ceil(array.length/ numberPerPage)
            return numberOfPages
        }     
    }
    
    /* Gets me the previous page */
    previousPage = () => {
        const { currentPage } = this.state;
        if (currentPage > 1) {
            this.setState({
                currentPage: currentPage - 1,
            })
        }
    }

    /* gets me the next page */
    nextPage = () => {
        const { currentPage } = this.state;
        const { food } = this.props;
        const pages = this.getNumberOfPages(food.data);

        if (pages > currentPage) {
            this.setState({
                currentPage: currentPage + 1,
            })
        }

    }

    render() {

        const { currentPage } = this.state;
        const { food } = this.props;

        const pages = this.getNumberOfPages(food.data);
        
        return (
            <div>
                <Menu pagination size="tiny">
                    <Menu.Item
                        onClick={this.previousPage}
                        as='a'
                        icon>
                        <Icon name='chevron left' />
                    </Menu.Item>
                    <Menu.Item >{currentPage} of {pages}</Menu.Item>
                    <Menu.Item
                        onClick={this.nextPage}
                        as='a'
                        icon>
                        <Icon name='chevron right' />
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default Pages; 