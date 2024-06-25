import { http, HttpResponse } from 'msw';

const mock = [
  {
    id: 0,
    lat: 33.450701,
    lng: 126.570667,
    message: 'test user',
  },
  {
    id: 1,
    lat: 33.450701,
    lng: 126.570667,
    message: 'test user1',
  },
  {
    id: 2,
    lat: 33.46,
    lng: 126.58,
    message: 'test user2',
  },
];

export const handlers = [
  http.post('https://test.com/user', async ({ request }) => {
    /*const { id } = await request;
    console.log(id);
    const response = mock.filter((data) => data.id === JSON.parse(id));*/

    return HttpResponse.json(mock);
  }),
]