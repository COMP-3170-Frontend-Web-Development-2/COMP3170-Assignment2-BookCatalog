import styles from "./book.module.css";

function Book({ book }) {
    function remove(e) {
        if (e.target === e.currentTarget) {
            return;
            // stops the propagation of the event, so if you click on the "background" of the book, it won't remove the book
        }

        if (e.target.tagName !== "SPAN") {
            return;
        }
        // this stops the propagation of the event if you clikc on the text of the book, it wont remove the book too

        e.currentTarget.remove();
    }

    return (
        <div className={styles.book}>
            <div className={styles.book__imageContainer}>
                <img
                    src={book.image}
                    alt={book.title}
                    className={styles.book__image}
                />
            </div>

            <div
                className={styles.book__content}
                onClick={remove}>
                <p className={styles.book__price}>{book.price}</p>
                <a
                    href={book.detailsUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={styles.book__link}>
                    View Details
                </a>
                <span className={styles.book_remove}>X</span>
            </div>
        </div>
    );
}

export default Book;
