function BookForm() {
    return (
        <div className='form_container'>
            <h2>Add new product</h2>

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
                    <label htmlFor='pr-desc'>Description:</label>
                    <input
                        type='text'
                        name='pr-desc'
                        placeholder='Description'
                    />
                </div>

                <div className='form-control'>
                    <label htmlFor='pr-price'>Price:</label>
                    <input
                        type='number'
                        name='pr-price'
                        placeholder='Price'
                    />
                </div>

                <button className='btn primary'>Save</button>
            </form>
        </div>
    );
}

export default BookForm;
