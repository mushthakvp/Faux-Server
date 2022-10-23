const Booking = require("../schema/bookingModel");
const asyncHandler = require("express-async-handler");

module.exports = {
  addBooking: asyncHandler(async (req, res) => {
    try {
      const booking = new Booking({
        turf_id: req.body.turf_id,
        booking_date: req.body.booking_date,
        time_slot: req.body.time_slot,
      });

      const findTurf = await Booking.find({ turf_id: req.body.turf_id });
      if(findTurf){
        let slot = req.body.time_slot;
        let i = 0;
        let flag = 0;
        for ( i = 0; i < findTurf.length; i++) {
          if (findTurf[i].booking_date === req.body.booking_date) {
            flag++;
            break
          }
        }
        if(flag == 1){
          for(let j = 0; j < slot.length; j++){
            if(!findTurf[i].time_slot.includes(slot[j])){
              await Booking.findOneAndUpdate({turf_id : findTurf[i].turf_id},{$push:{time_slot:slot[j]}});
            }
          }
          res.status(200).json({"message":"Booking Added Successfully"});
        }else{
          await booking.save();
          res.status(200).json({"message":"Booking Already Exist"});
        }
      }else{
        await booking.save();
        res.status(200).json({message: "Booking Added Successfully"});
      }


     
    } catch (error) {
      res.status(401).json({ status: false, message: error.message });
    }
  }),
  getBooking: asyncHandler(async (req, res) => {
    try {
      const turf_id = req.params.id;
      const booking = await Booking.find({ turf_id: turf_id }).select("-__v");
      res.status(200).json({ status: true, data: booking });
    } catch (error) {
      res.status(401).json({ status: false, message: error.message });
    }
  }),
};
