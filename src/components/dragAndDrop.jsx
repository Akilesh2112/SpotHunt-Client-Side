import React from 'react';
import './components.css'



function previewFiles ()
{
    var preview = document.getElementById( 'preview' );
    var files = document.getElementById( 'file' ).files;

    function readAndPreview ( file )
    {
        // Make sure `file.name` matches our extensions criteria
        if ( /\.(jpe?g|png)$/i.test( file.name ) )
        {
            var reader = new FileReader();

            reader.addEventListener( "load", function ()
            {
                var image = new Image();
                image.height = 100;
                image.title = file.name;
                image.src = this.result;
                preview.appendChild( image );
            }, false );

            reader.readAsDataURL( file );
                    console.log(files);
        }
    }

    if ( files )
    {
        [].forEach.call( files, readAndPreview );
    }
}





function DragAndDrop ()
{
    return (
        <div>
            <form className="box" enctype="multipart/form-data">
                <div className="box__input">
                    <input
                        className="box__file"
                        type="file"
                        name="files[]"
                        id="file"
                        data-multiple-caption="{count} files selected"
                        onChange={ previewFiles }

                        multiple
                    />
                    <label for="file"
                    ><strong>Choose a file</strong
                    ><span className="box__dragndrop"> or drag it here</span>.</label
                    >
                    <button className="box__button" type="submit">Upload</button>
                </div>

                <div className="box__uploading">Uploading&hellip; </div>
                <div className="box__success">Done!</div>
                <div className="box__error">Error! <span></span>.</div>
            </form>

            {/* Image preview */ }
            <div id="preview"></div>
        </div>
    );
}


export default DragAndDrop;