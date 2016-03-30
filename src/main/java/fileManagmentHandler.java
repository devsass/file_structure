/**
 * Created by austin on 3/24/16.
 */

import static spark.Spark.*;
import org.eclipse.jetty.websocket.api.*;
import org.eclipse.jetty.websocket.api.annotations.*;

public class fileManagmentHandler {
    private fileStructure newStructure;

    @OnWebSocketConnect
    public void creator(){
        newStructure = new fileStructure();
        newStructure.createStructure();
    }
    @OnWebSocketClose
    public void destructor(){
        newStructure.deleteStructure();
    }
}

