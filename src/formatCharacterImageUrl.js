export default function (thumbnail) {
    if (!thumbnail || !thumbnail.path || !thumbnail.extension) {
        return null;
    }
    return `${thumbnail.path}.${thumbnail.extension}`;
}
