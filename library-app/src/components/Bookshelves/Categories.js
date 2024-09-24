export const categories = [
    {
        label: "Currently Reading",
        slug: toSlug("Currently Reading"),
        isVisible: true
    },
    {
        label: "Want to Read",
        slug: toSlug("Want to Read"),
        isVisible: true
    },
    {
        label: "Read",
        slug: toSlug("Read"),
        isVisible: true
    },
    {
        label: "None",
        slug: toSlug("None"),
        isVisible: false
    }
]

function toSlug(str) {
    return str
        .replace(/[^a-zA-Z0-9 ]/g, '')
        .trim()
        .split(' ')
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            } else {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
        })
        .join('');
}