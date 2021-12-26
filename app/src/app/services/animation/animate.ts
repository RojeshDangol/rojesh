import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const animations = {
    ballAnimate: [trigger('ball',[
        state('initial',
          style({})
      ),
        state('final',
          style({'left': '0%',
                  'top': '50%'})
        ),
        transition('initial => final' ,[ animate('.5s', 
        keyframes([
          style({
             offset: 0
          }),
          style({
             'left':'0%',
              offset: 0.5
          }),
          style({
            'left': '0%',
            'top': '50%',
            offset: 1.0

         })
        ])
        )]
        ),
        transition('final => initial' ,[ animate('.5s',
        keyframes([
          style({
            offset: 0
          }),
          style({
            'left':'0%',
            'top': '0%',
             offset: 0.5
         }),
         style({
           'left': '50%',
             offset: 1.0
       })
        ])
        )]),
      ])
    ],
    faceAnimate: [trigger('circle',[
        state('initial',
          style({left: '0px', 
                backgroundColor: 'pink'})
      ),
        state('final',
          style({left: '0px',
                backgroundColor: 'black'})
        ),
        transition('initial => final' ,[ animate('3s')
        ]),
        transition('final => initial' ,[ animate('3s')]),
      ]),
      trigger('line',[
        state('initial',
          style({left: '0px', 
                height:'25px', 
                width:'10px',
                backgroundColor: 'skyblue'})
      ),
        state('final',
          style({left: '0px',
                height: '25px',
                width:'50%',
                backgroundColor: 'black'})
        ),
        transition('initial => final' ,[ animate('3s',
        keyframes([
            style({
                top: '75px',
                width: '20%',
                backgroundColor: 'red',
                offset: .33
            }),
            style({
                width: '40%',
                top: '75px',
                backgroundColor: 'blue',
                offset: .66
            }),
            style({
                top: '50px',
                width: '50%',
                backgroundColor: 'blue',
                offset: 1
            })
        ])
        )]),
        transition('final => initial' ,[ animate('3s')]),
      ])
    ],

      drawSvg: [trigger('path',[
        state('initial',
          style({'stroke-dashoffset': "208"})
      ),
        state('final',
          style({'stroke-dashoffset': "0"})
        ),
        transition('initial => final' ,[ animate('2s')
        ]),
        transition('final => initial' ,[ animate('2s')]),
      ])
    ],

    animeTrigger1: [trigger('circle',[
      state('initial',
        style({left: '0px', 
              backgroundColor: 'pink'})
    ),
      state('final',
        style({left: '0px',
              
              backgroundColor: 'black'})
      ),
      transition('initial => final' ,[ animate('.5s')]),
      transition('final => initial' ,[ animate('.5s')]),
    ]),
    trigger('line',[
      state('initial',
        style({left: '0px', 
              height:'25px', 
              width:'10px',
              backgroundColor: 'skyblue'})
    ),
      state('final',
        style({left: '0px',
              height: '25px',
              width:'50%',
              backgroundColor: 'black'})
      ),
      transition('initial => final' ,[ animate('.5s')]),
      transition('final => initial' ,[ animate('.5s')]),
    ])
  ],

  animeTrigger2: [trigger('circle1',[
      state('initial1',
        style({left: '0px', backgroundColor: 'red'})
    ),
      state('final1',
        style({left: '0px',
              backgroundColor: 'black'})
      ),
      transition('initial1 => final1' ,[ animate('.5s')]),
      transition('final1 => initial1' ,[ animate('.5s')]),
    ]),
    trigger('line1',[
      state('initial1',
        style({left: '0px', 
              height:'25px', 
              width:'10px',
              backgroundColor: 'blue'})
    ),
      state('final1',
        style({left: '0px',
              height: '25px',
              width:'50%',
              backgroundColor: ''})
      ),
      transition('initial1 => final1' ,[ animate('.5s')]),
      transition('final1 => initial1' ,[ animate('.5s')]),
    ])]
      
    
}