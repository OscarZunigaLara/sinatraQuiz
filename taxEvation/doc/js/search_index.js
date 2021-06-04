var search_data = {"index":{"searchIndex":["httpstatus","object","check_resource_by_id()","get_resource_by_id()","get_scores()","handle_bad_method()","handle_bad_request()","handle_get()","handle_post()","lambda_handler()","make_response()","make_result_list()","make_url()","parse_body()","sort_items()","store_score_item()","readme"],"longSearchIndex":["httpstatus","object","object#check_resource_by_id()","object#get_resource_by_id()","object#get_scores()","object#handle_bad_method()","object#handle_bad_request()","object#handle_get()","object#handle_post()","object#lambda_handler()","object#make_response()","object#make_result_list()","object#make_url()","object#parse_body()","object#sort_items()","object#store_score_item()",""],"info":[["HttpStatus","","HttpStatus.html","","<p>The <code>HttpStatus</code> class represents the posible HTTP status codes to return in the response\n"],["Object","","Object.html","",""],["check_resource_by_id","Object","Object.html#method-i-check_resource_by_id","(id, answer)","<p>Generates a response for the lambda to return to its client\n<p>Parameters &mdash; <p>id &mdash; The id of the question that …\n"],["get_resource_by_id","Object","Object.html#method-i-get_resource_by_id","(id)","<p>Gets a resource by its id\n<p>Parameters &mdash; <p>id &mdash; The index of the question\n\n<p>Returns &mdash; An object containing the id, …\n"],["get_scores","Object","Object.html#method-i-get_scores","()","\n<pre>Gets the scores stored in the table &#39;HighScores&#39;, sorts them and puts them in a format ready to become ...</pre>\n"],["handle_bad_method","Object","Object.html#method-i-handle_bad_method","(method)","<p>Handles unsuccesful requests to insert\n<p>Returns &mdash; A response with a 400 code and a message notifying that …\n\n"],["handle_bad_request","Object","Object.html#method-i-handle_bad_request","()","<p>Handles unsuccesful requests to insert\n<p>Returns &mdash; A response with a 400 code and a message notifying that …\n\n"],["handle_get","Object","Object.html#method-i-handle_get","()","<p>Handles get HTTP Methods\n<p>Returns &mdash; A response with a 200 code and all the rows in the table &#39;HighScores&#39; …\n\n"],["handle_post","Object","Object.html#method-i-handle_post","()","<p>Handles Post HTTP Methods\n<p>Returns &mdash; A response with a 201 code and a message notifying that a row was succesfully …\n\n"],["lambda_handler","Object","Object.html#method-i-lambda_handler","(event:, context:)","<p>Handles the client&#39;s request based on what HTTP request it send and the parameters they sent\n<p>Parameters … &mdash; "],["make_response","Object","Object.html#method-i-make_response","(code, body)","<p>Generates a response for the lambda to return to its client\n<p>Parameters &mdash; <p>code &mdash; The HTTP code that indicate …\n"],["make_result_list","Object","Object.html#method-i-make_result_list","(items)","<p>Generates an object with all the entries in the Dynamo table &#39;HighScores&#39; in a list\n<p>Parameters … &mdash; "],["make_url","Object","Object.html#method-i-make_url","(host, path, index)","<p>Creates an url in string format\n<p>Parameters &mdash; <p>host &mdash; The host of the service\n<p>path &mdash; The path in the host\n"],["parse_body","Object","Object.html#method-i-parse_body","(body)","<p>Parses the body given by the client and checks if it has the keys &#39;Username&#39; and &#39;timestamp&#39; …\n"],["sort_items","Object","Object.html#method-i-sort_items","(items)","<p>Sorts the items obtained from the table &#39;HighScores&#39;\n<p>Parameters &mdash; <p>items &mdash; The entries in the table …\n\n"],["store_score_item","Object","Object.html#method-i-store_score_item","(body)","<p>Inserts a wow in the Table &#39;HighScore&#39;\n<p>Parameters &mdash; <p>body &mdash; The body of the clients request, expected …\n\n\n"],["README","","README_rdoc.html","","<p>Application Design and Architecture\n<p>Author &mdash; Leonardo Castillejos Vite (A01375332), Oscar Zuniga Lara (A01654827) …\n"]]}}