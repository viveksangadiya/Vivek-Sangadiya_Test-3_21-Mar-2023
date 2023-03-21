import { Injectable } from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req:HttpRequest<unknown>,next:HttpHandler){
    
    let tokenReq=req.clone(
     {
       setHeaders:{
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIwZjdmNTM4Yi1kNzg3LTQwNmEtOWQ0ZC03YTVlYmE1YTQxNzYiLCJzdWIiOiJyY3BhbG1lckBhdGxhbnRhLmsxMi5nYS51cyIsImdpdmVuX25hbWUiOiJSb2JlcnQiLCJmYW1pbHlfbmFtZSI6IlBhbG1lciIsImVtYWlsIjoicmNwYWxtZXJAYXRsYW50YS5rMTIuZ2EudXMiLCJqdGkiOiJkMTFlN2QxZi1hMTAyLTQ0ZWEtOWQ1NS01ODY4ZmZkZWYzY2IiLCJVc2VyUGVybWlzc2lvbnMiOiJVc2VyLFByb2plY3QsUHJvamVjdCxWZW5kb3IsUHJvamVjdCxDb3N0RXZlbnQsSW52b2ljZSxQcm9qZWN0LEJ1ZGdldEl0ZW0sQ29zdEV2ZW50LENvc3RFdmVudFJlYXNvbixDb3N0RXZlbnRSZWFzb24sUHJvamVjdCxVc2VyLFZlbmRvcixDb3N0RXZlbnQsQ29udHJhY3RUeXBlLFByb2plY3QsQ3VzdG9tZXIsUHJvamVjdCxQcm9qZWN0LFRva2VuLENvc3RFdmVudCxCdWRnZXRJdGVtLEN1c3RvbWVyLFByb2plY3QsUHJvamVjdFR5cGUsUHJvamVjdCxVc2VyLFByb2plY3RUeXBlLFByb2plY3QsUHJvZ3JhbSxCdWRnZXRJdGVtLFZlbmRvcixTZXJ2aWNlVHlwZSxVc2VyLFByb2plY3RUeXBlLEJ1ZGdldEl0ZW0sQnVkZ2V0VGVtcGxhdGUsUHJvamVjdCxQcm9qZWN0LFByb2plY3QsQ29zdEV2ZW50LFByb2plY3QsQ2xpZW50LFByb2dyYW0sVG9rZW4sRGFzaEJvYXJkLFVzZXIsSW52b2ljZSxDb3N0RXZlbnQsVXNlcixVc2VyLFByb2plY3QsUHJvamVjdCxDb3N0RXZlbnQsVXNlcixQcm9qZWN0LFByb2plY3QsQ29zdEV2ZW50LFByb2plY3QsVmVuZG9yLEN1c3RvbWVyLENvbnRyYWN0VHlwZSxDb3N0RXZlbnRSZWFzb24sUHJvamVjdCxCdWRnZXRUZW1wbGF0ZSxWZW5kb3IsUmVwb3J0LFByb2plY3QsUHJvamVjdCxVc2VyLEJ1ZGdldEl0ZW0sUmVwb3J0LFJlcG9ydCxQcm9qZWN0LENvc3RFdmVudCxTZXJ2aWNlVHlwZSxJbnZvaWNlLFByb2plY3QsVXNlcixQcm9qZWN0LENvc3RFdmVudCxQcm9ncmFtLENvbnRyYWN0VHlwZSxSZXBvcnQsU2VydmljZVR5cGUsUHJvZ3JhbSxWZW5kb3IsRmlsZSxCdWRnZXRJdGVtLFVzZXIsUHJvamVjdCxQcm9qZWN0LFByb2plY3RUeXBlLFByb2plY3QsUHJvamVjdCxQcm9ncmFtLFByb2plY3RUeXBlLEZpbGUsUHJvZ3JhbVR5cGUsQnVkZ2V0SXRlbSxTZXJ2aWNlVHlwZSxQcm9qZWN0VHlwZSxDb3N0RXZlbnQsQnVkZ2V0VGVtcGxhdGUsQnVkZ2V0SXRlbSxDb250cmFjdFR5cGUsUHJvamVjdCxSZXBvcnQsSW52b2ljZSxDb250cmFjdFR5cGUsRGFzaGJvYXJkLEN1c3RvbWVyLFNlcnZpY2VUeXBlLEZpbGUsUHJvZ3JhbSxSZXBvcnQsQ29zdEV2ZW50UmVhc29uLERhc2hCb2FyZCxQcm9qZWN0LEludm9pY2UsQ29zdEV2ZW50LEJ1ZGdldFRlbXBsYXRlLEZpbGUsQ29udHJhY3RUeXBlLENvc3RFdmVudFJlYXNvbixVc2VyLFByb2plY3QsU2VydmljZVR5cGUsUHJvamVjdCxSZXBvcnQsVXNlcixDdXN0b21lcixQcm9qZWN0LFByb2plY3QsQ29zdEV2ZW50UmVhc29uLEJ1ZGdldFRlbXBsYXRlLFByb2plY3QsUmVtb3ZlVXNlcnNGcm9tUm9sZSxFZGl0Q29udGFjdCxHZXRQcm9qZWN0RGV0YWlsc0J5SUQsRGVsZXRlVmVuZG9yLEdldFBvdGVudGlhbENvc3RCeUNhdGVnb3J5SWQsR2V0Q29zdEV2ZW50Q29udHJhY3RzLEdldEFuSW52b2ljZSxFZGl0SXNzdWUsRWRpdEJ1ZGdldEl0ZW0sR2V0VW5tYXBwZWRDQ0RDb3N0RXZlbnRzLEFkZENvc3RFdmVudFJlYXNvbixHZXRBQ29zdEV2ZW50UmVhc29uLEdldElzc3Vlc0ZvckFsbFByb2plY3RzLEFkZFVzZXJCeUNsaWVudCxFZGl0VmVuZG9yLFJldmlld0FjdGlvbixBY3RpdmF0ZSxHZXRBbGxQcm9qZWN0cyxHZXRDdXN0b21lckxvZ28sRGVsZXRlRmlsZSxHZXRTY2hlZHVsZUJ5UHJvamVjdElELENoYW5nZURpcmVjdG9yeSxDcmVhdGVDb3N0RXZlbnQsQ3JlYXRlQnVkZ2V0SXRlbSxHZXRJbnZvaWNlQWRkaXRpb25hbEZpZWxkcyxBZGRQcm9qZWN0LEdldEFsbFByb2plY3RUeXBlcyxEZWxldGVDb250YWN0LEdldEFsbE1lbnVzLERlYWN0aXZhdGVQcm9qZWN0VHlwZSxHZXRBU3RhdHVzUmVwb3J0LEdldFByb2plY3RCeVByb2dyYW1JZCxFZGl0UHJvamVjdEJ1ZGdldEl0ZW0sQWN0aXZhdGVWZW5kb3IsRGVhY3RpdmF0ZSxHZXRDbGllbnRSb2xlcyxFZGl0UHJvamVjdFR5cGUsRGVsZXRlQnVkZ2V0SXRlbSxDcmVhdGVCdWRnZXRUZW1wbGF0ZSxHZXRTdGF0dXNSZXBvcnRzQnlQcm9qZWN0SWQsQWN0aXZhdGVQcm9qZWN0LEdldEZpbGUsR2V0Q29zdEV2ZW50Q29udGluZ2VuY2llcyxBZGRGaWxlcyxDbGllbnRTcGFjZVV0aWxpemF0aW9uLEFjdGl2YXRlUHJvZ3JhbSxHZXREaXJlY3RvcnksR2V0T3Blbklzc3VlcyxDaGFuZ2VQYXNzd29yZCxHZXRJbnZvaWNlQnlQcm9qZWN0SWQsR2V0Q29zdEV2ZW50RGV0YWlsQnlJZCxHZXRVc2Vyc0J5Q2xpZW50LEdldFVzZXJzQnlSb2xlLEFkZFN0YXR1c1JlcG9ydCxHZXRQb3RlbnRpYWxDb3N0QnlQcm9qZWN0SUQsR2V0Q29zdEV2ZW50Q2hhbmdlT3JkZXJzLEFjdGl2YXRlRGVsZXRlZFVzZXIsRWRpdFByb2plY3QsR2V0UG90ZW50aWFsQ29zdEJ5SXNzdWVJZCxHZXRDb3N0RXZlbnRCeVByb2plY3RJZCxTY2hlZHVsZVRhcmdldHMsR2V0QWxsVmVuZG9ycyxHZXRQcm9qZWN0S2V5RGF0ZXMsQWRkQ29udHJhY3RUeXBlLEdldEFsbENvc3RFdmVudFJlYXNvbnMsQWRkSXNzdWUsRGVsZXRlQnVkZ2V0VGVtcGxhdGUsR2V0QVZlbmRvcixHZXREb2NSZXZpZXdMb2dzLEdldFBvdGVudGlhbENvc3RCeU51bWJlcixHZXRTdGF0dXNSZXBvcnRCeVN0YXR1c1JlcG9ydE51bWJlcixHZXRVc2Vyc0J5Q2xpZW50LEdldEJ1ZGdldEl0ZW1zQnlQcm9qZWN0SWQsR2V0UHJvamVjdFdlZWtseVJlcG9ydCxHZXRJc3N1ZUxvZ3MsRmlsZXNMaXN0LEdldFN1Y2Nlc3NvclN0YXRlc0J5UHJlc2VudFN0YXRlLEFjdGl2YXRlLEVkaXRJbnZvaWNlLEdldFNjaGVkdWxlc0ZvckFsbFByb2plY3RzLEdldENsaWVudFVzZXJCeVVzZXJJRCxHZXRQcm9ncmFtcyxHZXRQcm9qZWN0Q29zdEV2ZW50QnlCdWRnZXRJdGVtSWQsR2V0UHJvZ3JhbUJ5SWQsR2V0QUNvbnRyYWN0VHlwZSxHZXRQTUFzc2lnbm1lbnRzLEdldEFTZXJ2aWNlVHlwZSxEZWxldGVQcm9ncmFtLEFkZFZlbmRvcixQcm9jZXNzU2NoZWR1bGUsR2V0QWxsQnVkZ2V0SXRlbXMsQWRkVXNlckFuZFJvbGUsRGVsZXRlUHJvamVjdCxHZXRTdGF0dXNSZXBvcnRzQnlQcm9qZWN0SWQsQWRkUHJvamVjdFR5cGUsR2V0Q29udGFjdCxBZGRDb250YWN0LEVkaXRQcm9ncmFtLEdldEFQcm9qZWN0VHlwZSxHZXRGaWxlcyxHZXRBbGxQcm9qZWN0VHlwZXNCeVByb2dyYW1UeXBlLEdldEFsbEJ1ZGdldEl0ZW1zQnlUZW1wbGF0ZUlkLEVkaXRTZXJ2aWNlVHlwZSxBY3RpdmF0ZVByb2plY3RUeXBlLEdldEFsbENvc3RFdmVudHMsR2V0QWxsQnVkZ2V0VGVtcGxhdGVzLEdldEJ1ZGdldEl0ZW1EZXRhaWxCeUlkLERlYWN0aXZhdGUsR2V0U3RhdHVzUmVwb3J0V2l0aFByb2plY3RCeVN0YXR1c1JlcG9ydE51bWJlcixHZXRDT25DUkxvZyxBZGRJbnZvaWNlLEVkaXRDb250cmFjdFR5cGUsR2V0QWN0aXZlUHJvamVjdHMsR2V0UHJvamVjdEFkZGl0aW9uYWxUZXh0cyxHZXRBbGxTZXJ2aWNlVHlwZXMsQW5vbWFseSxBZGRQcm9ncmFtLEdldFBNQWN0aXZpdGllcyxEZWFjdGl2YXRlLEdldFByb2plY3RUb0RvcyxQcm9qZWN0RmlsZXNMaXN0LEdldEFsbEludm9pY2VzLEVkaXRDb3N0RXZlbnQsRWRpdEJ1ZGdldFRlbXBsYXRlLEltcG9ydFNjaGVkdWxlRmlsZSxHZXRBbGxDb250cmFjdFR5cGVzLEVkaXRDb3N0RXZlbnRSZWFzb24sRGVsZXRlVXNlcixHZXRJc3N1ZUJ5SXNzdWVOdW1iZXIsQWRkU2VydmljZVR5cGUsR2V0UG90ZW50aWFsQ29zdEJ5VHlwZUlkLEdldFByb2dyYW1Nb250aGx5UmVwb3J0LEVkaXRDbGllbnRVc2VyLEdldEN1c3RvbWVyU2V0dGluZ3MsR2V0QWxsSXNzdWVzQnlQcm9qZWN0SWQsRWRpdFN0YXR1c1JlcG9ydCxBY3RpdmF0ZSxHZXRCdWRnZXRUZW1wbGF0ZURldGFpbEJ5SWQsR2V0QWxsQ29udGFjdHNCeVByb2plY3RJZCIsIlVzZXJJRCI6IjBmN2Y1MzhiLWQ3ODctNDA2YS05ZDRkLTdhNWViYTVhNDE3NiIsIkNsaWVudElEIjoiODJiNGY4NzktN2JkNS00YTg2LTI1ZWUtMDhkOGIxZjVhOTYxIiwiZXhwIjoxNjgwMjY3NjM4LCJpc3MiOiJodHRwOi8vY21pLW9mbTIuYXp1cmV3ZWJzaXRlcy5uZXQvIiwiYXVkIjoiaHR0cDovL2NtaS1vZm0yLmF6dXJld2Vic2l0ZXMubmV0LyJ9.thWblKQsmCtTz1hEvfTN9t8VpuIrW3atR2zf0dQB8_8'
       }
     }
    )
    return next.handle(tokenReq);
}
}
