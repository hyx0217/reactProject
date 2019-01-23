import React from 'react'
import {getList} from '../actions/product'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
const mapStateToProps=(state)=>{
     return {
        rows:state.list.rows,
        total:state.list.total
    } 
}
class Product extends React.Component{
    componentDidMount(){
        this.props.getList()
    }
    showRows(){
        const cart={
            width:'25%',
            display:'inline-block',
        }
        let jsx=[];
        this.props.rows.map((item,index)=>{
            jsx.push((
                <Card key={index} style={cart}>
                <CardImg style={{width:15+'rem',height:15+'rem'}} src={item.img} alt="Card image cap" />
                <CardBody >
                    <CardTitle>{item.name}</CardTitle>
                    <CardText>{item.time}</CardText>
                    <Button>Button</Button>
                </CardBody>
                </Card>
            ))
        })
        return jsx
    }
    changPage(page){
        this.props.getList(page);
    }
    showPage(){
        let jsx=[];
        let total=Math.ceil(this.props.total/8)
        for(let i=1;i<=total;i++){
            jsx.push(<PaginationItem key={i}>
            <PaginationLink href="javascript:void(0)" onClick={()=>this.changPage(i)} >
              {i}
            </PaginationLink>
          </PaginationItem>)
        }
        return jsx
    }
    render (){
        
        return (
            <div>
                <div>
                    {this.showRows()}
                </div>
                <Pagination aria-label="Page navigation example">
                {this.showPage()}
                </Pagination>
            </div>
        )
    }
}
export default  connect(mapStateToProps,{getList})(Product)
