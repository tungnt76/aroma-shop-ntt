const Category = require('../models/categoryModel');

const catchAsync = require('../utils/catchAsync');

module.exports.getAll = catchAsync(async (req, res) => {
	const records = await Category.find();

	if (!records)
        return res
            .status(HTTP_STATUS_CODE.NOT_FOUND)
            .json({ message: ERROR_MESSAGE.NOT_FOUND });
    return res.status(HTTP_STATUS_CODE.SUCCESS).json({ result: records });
});
