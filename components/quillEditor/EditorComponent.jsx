import { useState,Component } from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

import '/node_modules/react-quill/dist/quill.snow.css';

class EditorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { editorHtml: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(html) {
        console.log('content',html)
        this.setState({ editorHtml: html });
    }

    async apiPostNewsImage(formData) {
        console.log('fdsdf',formData)
        // API post, returns image location as string e.g. 'http://www.example.com/images/foo.png'
    }

    imageHandler() {
        const input = document.createElement('input');

        input.setAttribute('type', 'file'); 
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => {
            const file = input.files[0];
            const formData = new FormData();

            //formData.append('image', file);
            formData.append("image", "123");
            // Save current cursor state
            const range = this.quill.getSelection(true);

            // Insert temporary loading placeholder image
            // this.quill.insertEmbed(range.index, 'image', `${window.location.origin}/images/loaders/placeholder.gif`);

            // Move cursor to right side of image (easier to continue typing)
            this.quill.setSelection(range.index + 1);

            //const res = await this.apiPostNewsImage(formData); // API post, returns image location as string e.g. 'http://www.example.com/images/foo.png'
             const res = formData
            // Remove placeholder image
            
            console.log('res=',res)
            // this.quill.deleteText(range.index, 1);

            // Insert uploaded image
            // this.quill.insertEmbed(range.index, 'image', res.body.image);
            this.quill.insertEmbed(range.index, 'image', "https://studyshareimagestorage.s3.ap-northeast-2.amazonaws.com/899166df-32ca-4db0-8129-c9bee69599b02021-07-18");
        };
    }

    render() {
        return (
            <div className="text-editor">
                {JSON.stringify(this.state.editorHtml)}
                <hr />
                <ReactQuill
                    ref={el => {
                        this.quill = el;
                    }}
                    style={{height: "300px"}} 
                    onChange={this.handleChange}
                    placeholder={this.props.placeholder}
                    modules={{
                        toolbar: {
                            container: [
                                [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
                                [{ size: [] }],
                                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                [{ list: 'ordered' }, { list: 'bullet' }],
                                ['link', 'video'],
                                ['link', 'image', 'video'],
                                ['clean'],
                                ['code-block']
                            ],
                            handlers: {
                                image: this.imageHandler
                            }
                        }
                    }}
                />
            </div>
        );
    }
}

export default EditorComponent;