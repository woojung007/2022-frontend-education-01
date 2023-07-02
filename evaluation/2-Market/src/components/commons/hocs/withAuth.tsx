import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { accessTokenState } from '../store/index';
import { Modal } from 'antd';
import { restoreAccessTokenLoadable } from '../libraries/store/index';
// @ts-ignore

export const withAuth = (Component) => (props) => {
  const [accessToken, ] = useRecoilState(accessTokenState)
  const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable);
  const router = useRouter();

    useEffect(() => {
            if (!accessToken) {
              restoreAccessToken.toPromise().then((newAccessToken) => {
                if (!newAccessToken) {
                  Modal.error({content:"상품을 등록하려면 로그인이 필요합니다."})
                  router.push("/market/user/login");
          }
        })
      }
      },[])  
      


    return <Component {...props}/>
}