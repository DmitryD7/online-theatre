import {AppStateType} from "./appReducer";
import appReducer from "./appReducer";
import {appActions} from "../../actions/appCommonActions";

let startState: AppStateType;
const {setAppStatus, setAppError} = appActions;

beforeEach(() => {
    startState = {
        status: "idle",
        error: null,
    };
});

test('correct app status must be set', () => {
    const endState = appReducer(startState, setAppStatus({status: "succeeded"}));

    expect(endState.status).toBe("succeeded");
    expect(endState.status).not.toBe("idle");
});

test('correct error message must be set', () => {
    const endState = appReducer(startState, setAppError({error: 'error'}));

    expect(endState.error).toBe('error');
    expect(endState.error).toHaveLength(5);
});