const Color = require('../models/colorModel');

const catchAsync = require('../utils/catchAsync');
const { HTTP_STATUS_CODE, ERROR_MESSAGE } = require('./base');

module.exports.getAll = catchAsync(async (req, res) => {
	const records = await Color.find();

	if (!records)
        return res
            .status(HTTP_STATUS_CODE.NOT_FOUND)
            .json({ message: ERROR_MESSAGE.NOT_FOUND });
    return res.status(HTTP_STATUS_CODE.SUCCESS).json({ result: records });
});

