import StarRatingComponent from 'react-star-rating-component';
import React, { Component } from 'react';
import axios from 'axios'
import dateFormat from 'dateformat';
import Rating from '../Rating';
import './ReviewForm.css'

export default class ReviewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '', name: '', content: '', rating: 0, errMessage: ""
        }
        this.addPost = this.addPost.bind(this)
        this.updateVal = this.updateVal.bind(this)
        this.onStarClick = this.onStarClick.bind(this)
    }
    updateVal({ target }) {
        this.setState({ [target.name]: target.value });
    }

    async sendReview(review) {
        let { homeId } = this.props
        try {
            debugger
            await axios.post(`/api/homes/review/${homeId}`, review)
        } catch (e) {
            console.log(e, 'REVIEW POST err')
        }
    }

    addPost() {
        const { title, name, content, rating, errMessage } = { ...this.state }
        if (name && name && content && rating !== 0) {
            const state = { ...this.state, date: dateFormat(new Date(), 'shortDate') }
            const review = { ...state }
            this.props.handlePost(review)
            this.sendReview(review)
            this.setState({ title: '', name: '', content: '', rating: 0, date: '', errMessage:"" })
        }else{
            this.setState({errMessage:"please fill all start and inputs"})
        }
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue })
    }

    render() {
        const { title, name, content, rating, date, errMessage } = this.state;
        return (
            <div className="formReviewMain">
                <div className="formReview">
                    <div><h2>Add Post</h2></div>
                    <div><input className="formReviewElem" type="text" name="title" placeholder="title" onChange={this.updateVal} value={title} /></div>
                    <div><input className="formReviewElem" type="text" name="name" placeholder="name" onChange={this.updateVal} value={name} /></div>
                    <div className="descArec"><textarea className="formReviewElem" name="content" rows="7" cols="50" type="text" placeholder="content" onChange={this.updateVal} value={content} /></div>
                    <span>{errMessage}</span>
                    <div><StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={rating}
                        onStarClick={this.onStarClick}
                        emptyStarColor={'#a09595'} />
                    </div>
                    <div className="postReview"><button className="formReviewElem" onClick={this.addPost}>post</button></div>
                </div>
            </div>

        )
    }
}