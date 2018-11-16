/**
 * @description Generate sync action creator
 *
 * @param type: String
 * @returns Object
 */
export function actionCreator(type) {
  return (payload, path) => {
    let obj = {
      type
    };

    if (payload) {
      obj = Object.assign({}, obj, { payload });
    }

    if (path) {
      obj = Object.assign({}, obj, { path });
    }

    return obj;
  };
}


/**
 * @description Generate async action creator
 *
 * @param pending: String
 * @param success: String
 * @param error: String
 * @returns Object
 */
export function asyncActionCreator(pending, success, error) {
  return {
    pending: actionCreator(pending),
    success: actionCreator(success),
    error: actionCreator(error)
  };
}
