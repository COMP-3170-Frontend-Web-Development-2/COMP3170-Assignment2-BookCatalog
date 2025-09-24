import styles from "../bookform.module.css";

function BookForm() {
    return (
        <div className='form_container'>
            <h2>Add new book</h2>

            <form>
                <div className='form_control'>
                    <label htmlFor='book_title'>Book Title:</label>
                    <input
                        type='text'
                        name='book_title'
                        placeholder='Book Title'
                    />
                </div>

                <div className='form_control'>
                    <label htmlFor='book_author'>Author:</label>
                    <input
                        type='text'
                        name='book_author'
                        placeholder='Author'
                    />
                </div>

                <div className='form-control'>
                    <label htmlFor='book_publisher'>Publisher:</label>
                    <input
                        type='text'
                        name='book_publisher'
                        placeholder='Publisher'
                    />
                </div>

                <div className='form-control'>
                    <label htmlFor='book_year'>Publication Year:</label>
                    <input
                        type='number'
                        name='book_year'
                        placeholder='Publication Year'
                    />
                </div>

                <div className='form-control'>
                    <label htmlFor='book_language'>Language:</label>
                    <input
                        type='text'
                        name='book_language'
                        placeholder='Language'
                    />
                </div>

                <div className='form-control'>
                    <label htmlFor='book_pages'>Number of pages:</label>
                    <input
                        type='number'
                        name='book_pages'
                        placeholder='Number of pages'
                    />
                </div>

                <button className='book_button'>Add Book</button>
            </form>
        </div>
    );
}

export default BookForm;
