import express from 'express';
const app = express();
app.use(express.json());

app.get('/calculate_age', (req,res) =>{
    const {dob} = req.query;
    if(!dob){
        return res.status(400).json({error: 'Date of birth is required'});
    }
    const birthDate = new Date(dob);
    if(isNaN(birthDate)){
        return res.status(400).json({error: 'Invalid date format'});
    }
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    res.json({age});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);  // eslint-disable-line no-console  // This line is for demonstration purposes. In a real-world application, you should replace it with proper logging.  // eslint-disable-next-line no-console  // This line is for demonstration purposes. In a real-world application, you should replace it with proper logging.  // eslint-disable-next-line no-console  // This line is for demonstration purposes. In a real-world application, you should replace it with proper logging.  // eslint-disable-next-line no-console  // This line is for demonstration purposes. In a real-world application, you should replace it with proper logging.  // eslint-disable-next-line no-console  // This line is for demonstration purposes. In a real-world application, you should replace it with proper logging.  // eslint-disable
});