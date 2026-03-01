function slugify(title) {
    return title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // bỏ dấu tiếng Việt
        .replace(/[^a-z0-9\s-]/g, "")    // bỏ ký tự đặc biệt
        .trim()
        .replace(/\s+/g, "-");          // thay khoảng trắng bằng -
}

module.exports = {
    slugify
};