export const calculateProgress = async (userID, lessonCategory, lessonType, lessonMain) => {
    try {
        const lessonsResponse = await fetch(`http://localhost:4000/lessons/${lessonCategory}/${lessonType}`);
        if (!lessonsResponse.ok) {
            throw new Error(`Failed to fetch lessons for ${lessonType}`);
        }
        const lessonsData = await lessonsResponse.json();
        const totalLessons = lessonsData.lessons.length;

        const studentResponse = await fetch(`http://localhost:4000/student/${userID}`);
        if (!studentResponse.ok) {
            throw new Error('Failed to fetch student data');
        }
        const studentData = await studentResponse.json();
        const completedLessons = studentData[lessonMain];

        const progress = Math.floor((completedLessons / totalLessons) * 100);
        console.log(progress)
        return progress;
    } catch (error) {
        console.error('Error calculating progress:', error);
        return 0; // Return 0 progress if there's an error
    }
};