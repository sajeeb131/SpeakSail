const fetchUserData = async (userID) => {
    try {
        const userResponse = await fetch(`http://localhost:4000/home/${userID}`);
        if (!userResponse.ok) {
            throw new Error('Failed to fetch user data');
        }
        const userData = await userResponse.json();
        return userData;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};

const fetchLessonData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch lesson data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching lesson data:', error);
        throw error;
    }
};

const calculateTotalLessons = async () => {
    try {
        const sd = await fetchLessonData('http://localhost:4000/lessons/listening/sentence-dictation');
        const qa = await fetchLessonData('http://localhost:4000/lessons/listening/qa');
        const listeningTotalLessons = sd.lessons.length + qa.lessons.length;

        const comprehension = await fetchLessonData('http://localhost:4000/lessons/reading/comprehension');
        const readingTotalLessons = comprehension.lessons.length;

        const storytelling = await fetchLessonData('http://localhost:4000/lessons/speaking/storytelling');
        const conversationExchange = await fetchLessonData('http://localhost:4000/lessons/speaking/conversation-exchange');
        const speakingTotalLessons = storytelling.lessons.length + conversationExchange.lessons.length;

        const pictureDescription = await fetchLessonData('http://localhost:4000/lessons/writing/picturedescription');
        const writingTotalLessons = pictureDescription.lessons.length;

        return {
            listeningTotalLessons,
            readingTotalLessons,
            speakingTotalLessons,
            writingTotalLessons
        };
    } catch (error) {
        console.error('Error calculating total lessons:', error);
        throw error;
    }
};


const FetchProgress = async (userID) => {
    try {
        const userData = await fetchUserData(userID);
        const {
            listening,
            reading,
            writing,
            speaking
        } = userData;

        

        return {
            user: userData,
            listeningProgress: listening,
            speakingProgress: speaking,
            readingProgress: reading,
            writingProgress: writing,
        };
    } catch (error) {
        console.error('Error in fetchDataAndCalculateProgress:', error);
        throw error;
    }
};

export default FetchProgress;
