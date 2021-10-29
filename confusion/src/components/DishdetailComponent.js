import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends React.Component {

    renderDish(dish){
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }

    renderComments(comments) {
        if (comments == null || comments.length === 0) {
          return (
            <div></div>
          );
        }
    
        const renderedComments = comments.map((comment) => {
            return (
              <li>
                <p>{comment.comment}</p>
                <p>-- {comment.author}, {this.convertDateToCommentDateFormat(comment.date)}</p>
              </li>
            );
          });
      
        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    { renderedComments }
                </ul>
            </div>
        );
    }
   
    convertDateToCommentDateFormat(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    }
    
    render() {

        const selectedDish = this.props.dish;

        if(selectedDish != null) {
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(selectedDish)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            { this.renderComments(this.props.dish.comments) }
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return(
                <div></div>
            )
        }
    }
}

export default DishDetail;