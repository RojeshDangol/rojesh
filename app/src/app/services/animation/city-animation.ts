import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const cityAnimations = {
  controlCityLine:[trigger('lineCity',[
    state('initial',
      style({
            backgroundColor: 'skyblue'})
  ),
    state('final',
      style({
            // bottom: '0%',
            height: '50%',
            backgroundColor: 'white'})
    ),
    transition('initial => final' ,[ animate('1s')
    ]),
    transition('final => initial' ,[ animate('1s')]),
  ])],
  controlCityCircle:[trigger('circleCity',[
    state('initial',
      style({
            backgroundColor: 'skyblue'})
  ),
    state('final',
      style({
            // bottom: '0%',
            top: '50%',
            backgroundColor: 'white'})
    ),
    transition('initial => final' ,[ animate('1s')
    ]),
    transition('final => initial' ,[ animate('1s')]),
  ])],
  controlCityBox:[trigger('boxCity',[
    state('initial',
      style({
            
            backgroundColor: 'skyblue'})
  ),
    state('final',
      style({
            // bottom: '0%',
            width: '100%',
            backgroundColor: 'black'})
    ),
    transition('initial => final' ,[ animate('1s')
    ]),
    transition('final => initial' ,[ animate('1s')]),
  ])],
    verticalAnimationMoon:[trigger('moon',[
        state('initial',
          style({
                backgroundColor: 'pink'})
      ),
        state('final',
          style({
                bottom: '0%',
                backgroundColor: 'white'})
        ),
        transition('initial => final' ,[ animate('1s')
        ]),
        transition('final => initial' ,[ animate('1s')]),
      ])],
    verticalAnimation:[trigger('building1',[
            state('initial',
              style({
                    backgroundColor: 'pink'})
          ),
            state('final',
              style({
                    height: '50%',
                    backgroundColor: 'black'})
            ),
            transition('initial => final' ,[ animate('1s')
            ]),
            transition('final => initial' ,[ animate('1s')]),
          ])],
    verticalAnimation1:[trigger('building2',[
            state('initial',
              style({
                    backgroundColor: 'pink'})
          ),
            state('final',
              style({
                    height: '80%',
                    backgroundColor: 'black'})
            ),
            transition('initial => final' ,[ animate('1s')
            ]),
            transition('final => initial' ,[ animate('1s')]),
          ])],
    verticalAnimation2:[trigger('building3',[
            state('initial',
              style({
                    backgroundColor: 'pink'})
          ),
            state('final',
              style({
                    height: '70%',
                    backgroundColor: 'black'})
            ),
            transition('initial => final' ,[ animate('1s')
            ]),
            transition('final => initial' ,[ animate('1s')]),
          ])],
    verticalAnimation3:[trigger('building4',[
            state('initial',
              style({
                    backgroundColor: 'pink'})
          ),
            state('final',
              style({
                    height: '65%',
                    backgroundColor: 'black'})
            ),
            transition('initial => final' ,[ animate('1s')
            ]),
            transition('final => initial' ,[ animate('1s')]),
          ])],
      verticalAnimation4:[trigger('building5',[
            state('initial',
              style({
                    backgroundColor: 'pink'})
          ),
            state('final',
              style({
                    height: '90%',
                    backgroundColor: 'black'})
            ),
            transition('initial => final' ,[ animate('1s')
            ]),
            transition('final => initial' ,[ animate('1s')]),
          ])],
      verticalAnimation5:[trigger('building6',[
            state('initial',
              style({
                    backgroundColor: 'pink'})
          ),
            state('final',
              style({
                    height: '70%',
                    backgroundColor: 'black'})
            ),
            transition('initial => final' ,[ animate('1s')
            ]),
            transition('final => initial' ,[ animate('1s')]),
          ])],
      bridgeAnimation:[trigger('bridge',[
            state('initial',
              style({
                    backgroundColor: 'none'})
          ),
            state('final',
              style({
                    // borderLeft: '90% solid transparent',
                    // borderRight: '90% solid transparent',
                    // borderBottom: '90% black',
                    // borderTop: '90% solid transparent',
                    height: '100%',
                    backgroundColor: 'none'})
            ),
            transition('initial => final' ,[ animate('1s')
            ]),
            transition('final => initial' ,[ animate('1s')]),
          ])],
    
}