import axios from 'axios'
import { useQuery } from 'react-query';

export const fetchUserById = (userId) => {
    return axios.get(`http://localhost:4000/users/${userId}`)
} 

export const fetchCoursesByChannelId = (channelId) => {
    return axios.get(`http://localhost:4000/channels/${channelId}`);
}

const userId = 1;

export default function DependentQueryPage() {



    const {data: user} = useQuery(['user', userId], () => fetchUserById(userId));

    const channelId = user?.data?.channelId;

    const {data: courses} = useQuery(['courses', channelId], () => fetchCoursesByChannelId(channelId), {
        enabled: !!channelId
    })

    console.log('courses', courses);
    
  return (
    <div>DependentQuery.page</div>
  )
}