const arrCheck = value => {
    if (!Array.isArray(value)) {
        return false;
    }
    for (let i = 0; i < value.length; i++) {
        if (!Array.isArray(value[i])) {
            return false;
        }
    }

    return true;
};
