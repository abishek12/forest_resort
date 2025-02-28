import React from 'react';
import { toast } from 'react-toastify';

const BlogForm = () => {

    const handleComment = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Thanks for your Comment")
    }

    return (
        <>
            <div className="comments-form">
                <div className="title">
                    <h3>Leave a comments</h3>
                </div>
                <form className="contact-comments" onSubmit={handleComment}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input name="name" className="form-control" placeholder="Name *" type="text" autoComplete='off' required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input name="email" className="form-control" placeholder="Email *" type="email" autoComplete='off' required />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group comments">
                                <textarea className="form-control" name='Comment' placeholder="Comment" autoComplete='off' required></textarea>
                            </div>
                            <div className="form-group full-width submit">
                                <button className="btn dark border" type="submit">Post Comment</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default BlogForm; 