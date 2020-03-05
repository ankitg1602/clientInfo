import React, {Component}  from "react";
import './styles.css'
import RichTextExample from './SlateEditor'
import { connect } from 'react-redux'
import actions from "./redux/actions";

class SlateComp extends Component {
    constructor(props){
        super(props)
        this.state = {
          posts: [],
          addNew: false,
          initialValue:  [
            {
              type: 'paragraph',
              children: [
                { text: 'This is editable ' },
                { text: 'rich', bold: true },
                { text: ' text, ' },
                { text: 'much', italic: true },
                { text: ' better than a ' },
                { text: '<textarea>', code: true },
                { text: '!' },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  text:
                    "Since it's rich text, you can do things like turn a selection of text ",
                },
                { text: 'bold', bold: true },
                {
                  text:
                    ', or add a semantically rendered block quote in the middle of the page, like this:',
                },
              ],
            },
            {
              type: 'block-quote',
              children: [{ text: 'A wise quote.' }],
            },
            {
              type: 'paragraph',
              children: [{ text: 'Try it out for yourself!' }],
            },
          ]
        }
    }

    componentDidMount() {
      this.props.fetchPost()
    }

    componentWillReceiveProps(nextProps) {
      console.log('nextProps:', nextProps)
      this.setState({posts: nextProps.posts});
    }

    addTextBox = () => {
      let obj = [...this.state.posts];
      obj.push(this.state.initialValue)
      this.setState({
        posts: obj,
        addNew: true
      })
    }

    onChange = (obj) => {
      this.props.createPost(obj)
    }

    render() {
        return (
            <div>
               {
                 this.state.posts &&  this.state.posts.length ? 
                  this.state.posts.map((post, index) => {
                    if (post && post.posts) {
                      return <RichTextExample post={post.posts} onChange={(value) => this.onChange(value, post)} key={index}/>
                    }
                     
                   }): ''
                 }
                  {
                    this.state.addNew ? <RichTextExample post={this.state.posts} onChange={(value) => this.onChange(value)}/> : ''
                  }
                 
                <button onClick={this.addTextBox}>Add New</button>
            </div>
          );
    }

}

const mapStateToProps = store => ({
    posts: store.state.getPost,
    createPost: store.state.createPost,
    updatePost: store.state.updatePost
  });
  
  const mapActionsToProps = {
    fetchPost: actions.getPost,
    createPost: actions.createPost,
    updatePostById: actions.updatePostById
  };
  export default connect(
    mapStateToProps,
    mapActionsToProps
  )(SlateComp);